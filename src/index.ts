import { AxiosInstance } from 'axios'
import { instance } from './utils/Api'

export default class MitraReptir {
  public apiKey: string
  public instance: AxiosInstance

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.instance = instance
  }

  public greet() {
    return 'Hello, '
  }

  public async account(): Promise<any> {
    const result = await this.instance.get('/account', {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })
    return result.data
  }

  public async productList(): Promise<any> {
    const result = await this.instance.get('/product', {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })
    return result.data
  }

  public async productDetail(code: string): Promise<any> {
    const result = await this.instance.post(
      '/product',
      { code },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    )
    return result.data
  }

  public async buyProduct(
    code: string,
    dest: string,
    ref?: string | ''
  ): Promise<any> {
    const result = await this.instance.post(
      '/product',
      {
        type: 'buy',
        code,
        dest,
        ref
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    )
    return result.data
  }

  public async ppobData(): Promise<any> {
    const result = await this.instance.post(
      '/ppob',
      { type: 'list' },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    )
    return result.data
  }

  public async ppobInquiry(
    code: string,
    dest: string,
    ref?: string | ''
  ): Promise<any> {
    const result = await this.instance.post(
      '/ppob',
      {
        type: 'inquiry',
        code,
        dest,
        ref
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    )
    return result.data
  }

  public async ppobPayment(inquiry: string, ref?: string | ''): Promise<any> {
    const result = await this.instance.post(
      '/ppob',
      {
        type: 'payment',
        inquiry,
        ref
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    )
    return result.data
  }
}
