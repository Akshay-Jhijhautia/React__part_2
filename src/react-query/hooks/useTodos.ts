import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
  
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: () =>   axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data)
        // here these setting are set locally i.e only to this react query, not globally
        // retry: 3,
        // cacheTime: 300_000, //5min
        // staleTime: 10 * 1000, //10sec
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false,
      });  
}

export default useTodos;