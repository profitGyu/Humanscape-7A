import styles from '../Routes.module.scss'

import SearchBar from 'components/search/SearchBar'
import { SearchResult } from 'components/search/SearchResult'

const ReduxToolkitSearch = () => {
  return (
    <div className={styles.app} style={{ background: '#FF9671' }}>
      <main>
        <h1>리덕스</h1>
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

export default ReduxToolkitSearch
