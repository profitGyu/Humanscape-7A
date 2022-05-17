import styles from '../Routes.module.scss'

import SearchBar from 'components/search/SearchBar'
import { SearchResult } from 'components/search/SearchResult'
import SEO from 'components/Seo'

const UseQuerySearch = () => {
  return (
    <div className={styles.app} style={{ background: '#0081CF' }}>
      <SEO title='useQuery' />
      <main>
        <h1 className={styles.title}>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </h1>
        <SearchBar />
        <SearchResult />
      </main>
    </div>
  )
}

export default UseQuerySearch
