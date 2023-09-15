import { useQuery } from 'react-query'
import { FilterItem, FilterOptions } from './styles'
import { api } from '@/lib/axios'
import { BooksCategoriesApiResponse } from '@/interfaces/books'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

interface ExploreFiltersProps {
  selectedCategory: string | null
  handleChangeCategory: (category: string | null) => void
}

export function ExploreFilters({
  selectedCategory,
  handleChangeCategory,
}: ExploreFiltersProps) {
  const { data: categories, isLoading } = useQuery(['categories'], async () => {
    const response = await api.get<BooksCategoriesApiResponse>(
      '/books/categories',
    )
    return response.data.categories
  })

  if (isLoading) {
    return (
      <SkeletonTheme
        baseColor="#252D4A"
        highlightColor="#303F73"
        borderRadius="99999px"
        duration={4}
      >
        <FilterOptions>
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
          <Skeleton width={120} height={43} />
        </FilterOptions>
      </SkeletonTheme>
    )
  }

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
