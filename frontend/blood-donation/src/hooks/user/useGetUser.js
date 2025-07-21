import { useQuery } from "@tanstack/react-query"
import { manageUserService } from "../../services/manageUserService"

export const useGetUser = () => {
    const q = useQuery( {
        queryKey: ['get-user'],
        queryFn: async () => {
            return await manageUserService.getUser()
        }
    })
    return {
        ...q,
        data: q
    }
}