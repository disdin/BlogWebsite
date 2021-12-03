
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
       background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/120% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 40,
            fontWeight:'600',
            color: '#FFFFFF',
            color :"black",
            lineHeight: 1,
            background: '#fff3dc',
            borderRadius:"10px",
            fontFamily: 'Rubik',
            padding:'10px 20px'
        },
        // '& :last-child': {
        //     fontSize: 20,
        //     background: '#FFFFFF',
        // }
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
            <Box className={classes.image}>
                <Typography>BloggersDot</Typography>
                {/* <Typography></Typography> */}
            </Box>
        </>
    )
}

export default Banner;