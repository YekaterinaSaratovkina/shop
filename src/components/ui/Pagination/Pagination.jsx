import { Pagination as PaginationMUI, Stack } from "@mui/material"

const Pagination = ({
    onClick,
    color = "secondary",
    count,
    productsPerPage,
    totalProducts,
}) => {

    return (
        <Stack spacing={2}>
            <PaginationMUI
                count={count}
                color={color}
                onClick={onClick}
                totalProducts={totalProducts}
            >

            </PaginationMUI>
        </Stack>
    )
}

export default Pagination