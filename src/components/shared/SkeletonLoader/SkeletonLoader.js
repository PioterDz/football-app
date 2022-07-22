import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export const SkeletonLoader = () => {
    return (
        <Box sx={{ width: 600, height: 400, marginTop: 2 }}>
            <Skeleton variant="text" width={600} height={100} />
            <Skeleton variant="text" width={600} height={100} />
            <Skeleton variant="rectangular" width={600} height={200} />
        </Box>
    );
}
