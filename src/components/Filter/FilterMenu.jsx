import { useDispatch } from "react-redux"
import { filterUsers } from "redux/filterSlice"
import { useState } from "react"
import { FilterMenuContainer, SelectorList, Selector } from "./FilterMenu.styled"


export const FilterMenu = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const toggleShowFilterSelect = () => setIsOpen(isOpen=> !isOpen)
    

    const onFilterSelect = (e) => {
        const selectedFilter = e.target.id
        const filterUpdate =  {page: 1, isFollowing: selectedFilter}
        dispatch(filterUsers(filterUpdate))

}
    
    return (
        <FilterMenuContainer onClick={toggleShowFilterSelect} isOpen={isOpen}>
            <p>Filter</p>
            {isOpen && <SelectorList>
                <Selector onClick={onFilterSelect} id="">Show all</Selector>
                <Selector onClick={onFilterSelect} id="true">Show following</Selector>
                <Selector onClick={onFilterSelect} id="false">Show follow</Selector>
            </SelectorList>}
        </FilterMenuContainer>

    )
}