import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { atom } from 'recoil'

export const searchState = atom<string>({
  key: '#searchState',
  default: '암',
})
