import React from "react";
import BattleLayout from "@/components/battle/BattleLayout";
import MissionPanel from "@/components/battle/MissionPanel";
import EditorPanel from "@/components/battle/EditorPanel";
import ConsolePanel from "@/components/battle/ConsolePanel";

export default function BattlePage() {
    return (
        <BattleLayout
            leftPanel={<MissionPanel />}
            centerPanel={<EditorPanel />}
            rightPanel={<ConsolePanel />}
        />
    );
}
