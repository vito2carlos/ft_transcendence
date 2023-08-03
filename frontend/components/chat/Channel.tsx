import getData from "@/apis/getData";
import ChNav from "./ChNav";
import Messeges from "./ChannelItems";
import Friends from "@/components/common/Friends";
import userDto from "@/dto/userDto";

const Channel = async() => {
    console.log("-------------------");
    const data = await getData('/channels');
    const owner = await getData('/users/me');
    console.log("o", owner);
    return (
        <ChNav data={data}  path="/chat" owner={owner}/>
    );
}

export default Channel;