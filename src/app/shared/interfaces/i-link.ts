interface ILink {
    url: string;
}

export interface ILinkText extends ILink {
    text: string;
}

export interface ILinkIcon extends ILink {
    icon: string;
}