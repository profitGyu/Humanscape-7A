import styles from './SearchBar.module.scss'

import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchState } from 'states/disease'
import { SearchIcon } from 'assets/svgs'
import { useParams, useSearchParams } from 'react-router-dom'

const debounce = (callback: any, duration: number) => {
  let timer: NodeJS.Timeout
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...args), duration)
  }
}

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState<string>()
  const onChangeHandle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debounce(setSearchParams({ search: e.currentTarget.value }), 500)
      setSearch(e.currentTarget.value)
    },
    [searchParams]
  )

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchBarContainer} onSubmit={submitHandle}>
        <div>
          <SearchIcon className={styles.searchIcon} />
          <input type='text' placeholder='질환명을 입력해 주세요.' value={search} onChange={onChangeHandle} />
        </div>
        <button type='submit'>
          <SearchIcon className={styles.buttonsearchIcon} />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
