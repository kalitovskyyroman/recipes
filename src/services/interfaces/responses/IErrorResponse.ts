interface IError {}

interface IErrorResponse {
    message: string;
    errors: IError[];
}

export default IErrorResponse;
