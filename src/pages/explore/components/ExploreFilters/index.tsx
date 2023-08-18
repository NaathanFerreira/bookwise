import { useQuery } from 'react-query'
import { FilterItem, FilterOptions } from './styles'
import { api } from '@/lib/axios'
import { BooksCategoriesApiResponse } from '@/interfaces/books'

interface ExploreFiltersProps {
  selectedCategory: string | null
  handleChangeCategory: (category: string | null) => void
}

export function ExploreFilters({
  selectedCategory,
  handleChangeCategory,
}: ExploreFiltersProps) {
  const { data: categories } = useQuery(['categories'], async () => {
    const response = await api.get<BooksCategoriesApiResponse>(
      '/books/categories',
    )
    return response.data.categories
  })

  return (
    <>
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
    </>
  )
}
