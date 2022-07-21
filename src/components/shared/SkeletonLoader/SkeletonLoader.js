import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export const SkeletonLoader = () => {
    return (
        <Box sx={{ width: 300 }}>
                <Skeleton animation="wave" />
        </Box>
    );
}
