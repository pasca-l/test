import { router } from "expo-router";
import { SafeAreaView } from "react-native";
import { Text } from "react-native-paper";

import AuthenticationPage from "@/features/authentication/pages/AuthenticationPage";

export default function Root() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Root page</Text>
      <AuthenticationPage
        handleSpendingsRoute={(spendingsId: string) => {
          router.push({
            pathname: "/spendings/[id]/",
            params: { id: spendingsId },
          });
        }}
        handleVaultRoute={(vaultId: string) => {
          router.push({
            pathname: "/vaults/[id]/",
            params: { id: vaultId },
          });
        }}
      />
    </SafeAreaView>
  );
}
