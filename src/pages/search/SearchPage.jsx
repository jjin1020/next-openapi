import GoBackButton from "@/components/GoBackButton";
import SearchInput from "@/components/SearchInput";
import SearchResult from "@/components/SearchResult";
import Title from "@/components/Title";
import { solarState } from "@/states/solarStore"
import { useRecoilValue } from "recoil"

const SearchPage = () => {
	const a = useRecoilValue(solarState);
	
	return(
		<div className="flex flex-col items-center">
			<GoBackButton />
			<Title blackWord="Search " emphasisWord="Solar System" />
			<SearchInput />
			<SearchResult data={a} />
		</div>
	)	
}

export default SearchPage;
