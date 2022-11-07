export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Admin {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface Table {
  napr: string
  nastranapr: string
  tnved_description: string
  stoim: string
  netto: string
  kol: string
  region_description: string
  region_s_description: string
  month: string
  year: string
}

