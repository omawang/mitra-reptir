import { AxiosInstance } from 'axios'
import { instance } from './utils/Api'

interface IPpobInquiryArgs {
  code: string
  dest: string
  ref?: string | ''
  options?: {
    phone?: string
    period?: number
  }
}

export const PPOB_BPJS_CODE = 'BPJSKES'

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
      '/transaction',
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

  public async ppobInquiry(args: IPpobInquiryArgs): Promise<any> {
    const body: any = {
      type: 'inquiry',
      code: args.code,
      dest: args.dest,
      ref: args.ref
    }

    if (args.code === PPOB_BPJS_CODE) {
      body.options = args.options
    }

    const result = await this.instance.post('/ppob', body, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })
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
