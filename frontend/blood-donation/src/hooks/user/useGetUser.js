import { useQuery } from "@tanstack/react-query"
import { manageUserService } from "../../services/manageUserService"

export const useGetUser = () => {
    const q = useQuery( {
        queryKey: ['get-user'],
        queryFn: () => {
            return manageUserService.getUser()
        }
    })
    return {
        ...q,
        data: q
    }
}