export type ModalItem = {
    title: string,
    icon: React.JSX.Element
}

export type Modal = {
    pageType: string,
    modalItems: ModalItem[]
}