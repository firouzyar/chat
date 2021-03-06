import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        position:"absolute",
        top:"30px",
        bottom:"30px",
        left:"240px",
        right:"240px",
        overflowY:"hidden",
        [theme.breakpoints.down('md')]: {
            top:"85px",
            left:"80px",
            right:"80px",
        },
        [theme.breakpoints.down('xs')]: {
            left:"10px",
            right:"10px"
        }
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        cursor:"pointer",
    },
    chatWrapper:{
        display:"flex",
        height:"100%",
    },
    container:{
        flex:"1",
        height:"100%",
        [theme.breakpoints.down('md')]: {
            flex:"2",
        }
    },
    messageWrapper:{
        flex:"3",
        height:"100%",
    },
    searchWrapper:{
        padding:"10px",
        background:"#f6f6f6",
    },
    settingWrapper:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        background:"#ededed",
        padding:"10px 20px",
    },
    animationWrapper:{
        height:"100%",
    },
    noChatSelected:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"22px",
        height:"100%",
    }
}));

export { useStyles };

