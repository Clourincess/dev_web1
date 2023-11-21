import { VStack, Stack, HStack } from "@chakra-ui/react";

import SideMenu from "../components/side_menu";
import Header from "../components/header/header";
import Footer from "../components/footer";

const MovingGoodsPage = () => {
  return (
    <Stack 
    direction={"row"}
    height="auto"
    spacing="0"
    backgroundColor="menu_white"
    width="100%"
    >
      <SideMenu />
      <VStack
        marginLeft={[200, 200, 200, 210, 220]}
        backgroundColor="menu_white"
      >
        <Header />
        <VStack
          padding={25}
          alignItems="flex-start"
          overflow="scroll"
          spacing="40px"
        >
        </VStack>
        <Footer />
      </VStack>
    </Stack>
  );
};
export default MovingGoodsPage;
