import { NuxtAxiosInstance } from '@nuxtjs/axios'

type query = {
  id?: number
  email?: string
}

type payload = {
  id?: number
  email?: string
  password?: string
}

export class UserRepository {
  private readonly axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  createResource(apiVersion: Number) {
    return `/api/v${apiVersion}/users`
  }

  get(query: query, version = 1) {
    const uri = `${this.createResource(version)}/search`
    return this.axios.$get(uri, {
      params: { ...query },
    })
  }

  post(payload: payload, version = 1) {
    const uri = `${this.createResource(version)}/create`
    return this.axios.$post(uri, {
      params: { ...payload },
    })
  }
}
