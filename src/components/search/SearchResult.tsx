import { Item } from 'types/disease'
import styles from './SearchResult.module.scss'
import { SearchIcon } from 'assets/svgs'
import { useRecoilValue } from 'recoil'
import { searchState } from 'states/disease'
import { getOpenDiseaseAPi } from 'services/disease'
import { isAxiosError } from 'utils/axios'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'

export const SearchResult = () => {
  const search = useRecoilValue(searchState)
  const [searchParams] = useSearchParams()

  const currentSearch = searchParams.get('search')

  const { isLoading, error, data, isFetching } = useQuery(
    ['getDiseaseAPi', currentSearch],
    () => getOpenDiseaseAPi({ searchText: currentSearch }).then((res) => res.data.response.body.items.item),
    {
      // 쿼리가 없는 경우
      enabled: !!search,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  return (
    <ul className={styles.resultContainer}>
      {isLoading ? <li>로딩중</li> : <li>추천검색어</li>}
      {currentSearch !== null &&
        data?.map((item) => {
          return (
            <li key={item.sickCd}>
              <SearchIcon className={styles.searchIcon} />
              {item.sickNm.substring(0, item.sickNm.indexOf(currentSearch))}
              <span className={styles.mark}>{currentSearch}</span>
              {item.sickNm.substring(item.sickNm.indexOf(currentSearch) + 1)}
            </li>
          )
        })}
    </ul>
  )
}
