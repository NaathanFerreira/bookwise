import DefaultLayout from '@/layout/DefaultLayout'
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

export default function Explore() {
  return (
    <DefaultLayout>
      <ExplorePageContainer>
        <ExplorePageHeader>
          <h1>
            <BsBinoculars /> Explore
          </h1>
          <SearchInputContainer>
            <input type="text" placeholder="Search rated book" />
            <HiMagnifyingGlass />
          </SearchInputContainer>
        </ExplorePageHeader>
        <FilterOptions>
          <FilterItem selected>All</FilterItem>
          <FilterItem>Tech</FilterItem>
          <FilterItem>Education</FilterItem>
          <FilterItem>Fantasy</FilterItem>
          <FilterItem>Science Fiction</FilterItem>
          <FilterItem>Horror</FilterItem>
          <FilterItem>Heros</FilterItem>
          <FilterItem>Suspense</FilterItem>
        </FilterOptions>
        <BookList>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </BookList>
      </ExplorePageContainer>
    </DefaultLayout>
  )
}
