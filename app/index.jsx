import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue">
      <Link href={"/login"}>
        <Text className=" bg-black text-xl text-blue-500 font-bold ">
          Go to another jj Is it running ?
        </Text>
      </Link>
    </View>
  );
}
