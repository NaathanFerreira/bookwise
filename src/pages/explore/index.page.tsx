import DefaultLayout from '@/layout/DefaultLayout'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { BsBinoculars } from 'react-icons/bs'
import {
  BookList,
  ExplorePageContainer,
  ExplorePageHeader,
  FilterItem,
  FilterOptions,
  SearchInputContainer,
} from './styles'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import BookCard from './components/BookCard'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { Category } from '@prisma/client'
import { useState } from 'react'
import BookDetailsDrawer from './components/BookDetailsDrawer'
import { useRouter } from 'next/router'

type BooksWithAvgRating = {
  ratings: number
  avgRating: number
  alreadyRead: boolean
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
}

interface BooksApiReponse {
  books: BooksWithAvgRating[]
}

interface BooksCategoriesApiResponse {
  categories: Category[]
}

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchBook, setSearchBook] = useState('')

  const router = useRouter()
  const bookId = router.query.bookId

  const { data: books } = useQuery<BooksWithAvgRating[]>(
    ['books', selectedCategory],
    async () => {
      const response = await api.get<BooksApiReponse>('/books', {
        params: {
          category: selectedCategory,
        },
      })
      return response.data.books
    },
  )

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const response = await api.get<BooksCategoriesApiResponse>(
        '/books/categories',
      )
      return response.data.categories
    },
  )

  function handleChangeCategory(categoryId: string | null) {
    setSelectedCategory(categoryId)
  }

  function onOpenDetailsDrawerChange(open: boolean) {
    if (!open) {
      router.push('/explore', undefined, { shallow: true })
    }
  }

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchBook.toLowerCase()) ||
      book.author.toLowerCase().includes(searchBook.toLowerCase())
    )
  })

  return (
    <DefaultLayout>
      <ExplorePageContainer>
        <ExplorePageHeader>
          <h1>
            <BsBinoculars /> Explore
          </h1>
          <SearchInputContainer>
            <input
              type="text"
              placeholder="Search rated book"
              value={searchBook}
              onChange={({ target }) => setSearchBook(target.value)}
            />
            <HiMagnifyingGlass />
          </SearchInputContainer>
        </ExplorePageHeader>
        <FilterOptions>
          <FilterItem
            selected={selectedCategory === null}
            onClick={() => handleChangeCategory(null)}
          >
            All
          </FilterItem>
          {categories?.map((category) => {
            return (
              <FilterItem
                selected={selectedCategory === category.id}
                key={category.id}
                onClick={() => handleChangeCategory(category.id)}
              >
                {category.name}
              </FilterItem>
            )
          })}
        </FilterOptions>
        <BookList>
          <Dialog.Root open={!!bookId} onOpenChange={onOpenDetailsDrawerChange}>
            {filteredBooks?.map((book) => {
              return (
                <Dialog.Trigger asChild key={book.id}>
                  <Link href={`/explore?bookId=${book.id}`}>
                    <BookCard
                      coverImageUrl={book.cover_url}
                      title={book.name}
                      author={book.author}
                      rate={book.avgRating}
                    />
                  </Link>
                </Dialog.Trigger>
              )
            })}
            <BookDetailsDrawer />
          </Dialog.Root>
        </BookList>
      </ExplorePageContainer>
    </DefaultLayout>
  )
}
