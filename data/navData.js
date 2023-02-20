import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const navData = [
    {id:1, link:'/profile', icon:<AccountCircleIcon className="mr-7" fontSize="large" />, title:'Profile'},
    {id:2, link:'/experience', icon:<WorkHistoryIcon className="mr-7" fontSize="large" />, title:'Experience'},
    {id:3, link:'/projects', icon:<LightbulbOutlinedIcon className="mr-7" fontSize="large" />, title:'Projects'},
    {id:4, link:'/connect', icon:<ConnectWithoutContactOutlinedIcon className="mr-7" fontSize="large" />, title:'Contact'},
    {id:5, link:'/', icon:<HomeOutlinedIcon className="mr-7" fontSize="large" />, title:'Back'},
  ]