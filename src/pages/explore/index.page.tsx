import DefaultLayout from '@/layout/DefaultLayout'
import { BsBinoculars } from 'react-icons/bs'
import {
  ExplorePageContainer,
  ExplorePageHeader,
  SearchInputContainer,
} from './styles'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { ExploreFilters } from './components/ExploreFilters'
import { BookList } from './components/BookList'
import { BooksApiReponse } from '@/interfaces/books'
import { NextSeo } from 'next-seo'

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchBook, setSearchBook] = useState('')

  const { data: books } = useQuery(['books', selectedCategory], async () => {
    const response = await api.get<BooksApiReponse>('/books', {
      params: {
        category: selectedCategory,
      },
    })
    return response.data.books
  })

  function handleChangeCategory(categoryId: string | null) {
    setSelectedCategory(categoryId)
  }

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchBook.toLowerCase()) ||
      book.author.toLowerCase().includes(searchBook.toLowerCase())
    )
  })

  return (
    <>
    <NextSeo
      title="BookWise - Explore"
    />
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
        <ExploreFilters
          selectedCategory={selectedCategory}
          handleChangeCategory={handleChangeCategory}
        />
        <BookList filteredBooks={filteredBooks ?? []} />
      </ExplorePageContainer>
    </DefaultLayout>
    </>
  )
}
