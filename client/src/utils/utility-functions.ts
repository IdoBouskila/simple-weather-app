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
