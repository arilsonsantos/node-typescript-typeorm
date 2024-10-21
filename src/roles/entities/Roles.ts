import { v4 as uudV4 } from 'uuid'

export class Role {
    id?: string
    name: string
    createdAd: Date

    constructor() {
        if (!this.id){
            this.id = uudV4()
        }
        this.createdAd = new Date()
    }
}
