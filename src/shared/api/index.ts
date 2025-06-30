const API_BASE_URL = 'https://vet-clinic-y8t7.onrender.com/api'; 

const handleResponse = async (response: Response) => {
    if (response.ok) {
        if (response.status === 204 || response.headers.get("Content-Length") === "0") {
            return null;
        }
        return response.json();
    } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || `Ошибка ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
    }
};

export const api = {
    post: async <T, R>(endpoint: string, data: T, headers?: Record<string, string>): Promise<R> => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(headers || {}),
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },
    put: async <T, R>(endpoint: string, data: T, headers?: Record<string, string>): Promise<R> => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(headers || {}),
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },
    get: async <R>(endpoint: string, headers?: Record<string, string>): Promise<R> => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(headers || {}),
            },
        });
        return handleResponse(response);
    },
};