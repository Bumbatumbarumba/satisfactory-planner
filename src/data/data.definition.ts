export interface BaseResourceInfo {
    name: string,
    quantity: number
}

export interface Recipe extends BaseResourceInfo{
    input_resources: Array<BaseResourceInfo>,
    machine: string
}