import IHeaderLink from "../../../interfaces/IHeaderLink"

const getAccessByRole = (role: string, link: IHeaderLink) => !!link.roles?.includes(role)

export { getAccessByRole }
