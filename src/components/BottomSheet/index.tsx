import { Text, View } from "react-native";
import { styles } from "./styles";
import BottomSheetGorhom, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { AlertCard } from "../AlertCard";

export function BottomSheet() {
  const bottomSheetSnapPoints = useMemo(() => ["40%"], []);

  const bottomSheetRef = useRef<BottomSheetGorhom>(null);

  return (
    <BottomSheetGorhom
      ref={bottomSheetRef}
      snapPoints={bottomSheetSnapPoints}
      enablePanDownToClose
      index={0}
      handleIndicatorStyle={{
        backgroundColor: "#888888",
        width: 50,
        marginTop: 24,
      }}
    >
      <BottomSheetView>
        <AlertCard
          fontistoIconName="stopwatch"
          iconColor="#262626"
          title="Nenhuma entrega disponível."
          description="Aguarde, estamos preparando suas entregas."
        />
      </BottomSheetView>
    </BottomSheetGorhom>
  );
}
