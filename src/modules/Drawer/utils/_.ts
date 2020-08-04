export type Rect = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fill?: string;
    id?: string;
}

export type Label = {
    x?: number;
    y?: number;
    fontSize?: number;
    text?: string;
    id?: string;
}

export type Options = {
    label?: string;
    key?: string;
    icon?: string;
}

export enum ModulesEnum {
    rect = "rect-module",
    text = "text-module",
    line = "line-module",
    valve = "valve-module",
    drip = "drip-module",
    decrease = "decrease-module",
    union = "union-module",
}