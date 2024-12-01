// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...params: any[]) => any>(
	fn: T,
	ms: number = 500
) => {
	let timer: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);

		timer = setTimeout(() => fn(...args), ms);
	};
};

export const getHours = (localtime: string) => {
    const date = new Date(localtime);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${ hours }:${ minutes }`;
}
