import React from "react";
import BattleLayout from "@/components/battle/BattleLayout";
import EditorPanel from "@/components/battle/EditorPanel";
import ConsolePanel from "@/components/battle/ConsolePanel";
import CurriculumSidebar from "@/components/battle/CurriculumSidebar";

export default function BattlePage() {
    return (
        <BattleLayout
            leftPanel={<CurriculumSidebar />}
            centerPanel={<EditorPanel />}
            rightPanel={<ConsolePanel />}
        />
    );
}
