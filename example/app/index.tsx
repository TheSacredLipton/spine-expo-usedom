import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Switch } from "react-native";
import SpineView from "spine-expo-usedom";
import OwlExample from "../components/OwlExample";

const MODELS = [
  {
    name: "Spineboy",
    skeleton: "/spineboy/spineboy-pro.json",
    atlas: "/spineboy/spineboy.atlas",
    animations: ["run", "walk", "idle", "shoot", "jump", "death", "portal"],
    skins: ["default"]
  },
  {
    name: "Raptor",
    skeleton: "/raptor/raptor-pro.json",
    atlas: "/raptor/raptor-pma.atlas",
    animations: ["walk", "roar", "jump", "gun-grab"],
    skins: ["default"]
  },
  {
    name: "Alien",
    skeleton: "/alien/alien-pro.json",
    atlas: "/alien/alien-pma.atlas",
    animations: ["run", "death", "hit"],
    skins: ["default"]
  },
  {
    name: "Mix & Match",
    skeleton: "/mix-and-match/mix-and-match-pro.json",
    atlas: "/mix-and-match/mix-and-match-pma.atlas",
    animations: ["walk", "dance", "idle"],
    skins: ["full-skins/boy", "full-skins/girl", "default"]
  },
  {
    name: "Coin",
    skeleton: "/coin/coin-pro.json",
    atlas: "/coin/coin-pma.atlas",
    animations: ["animation"],
    skins: ["default"]
  },
  {
    name: "Stretchyman",
    skeleton: "/stretchyman/stretchyman-pro.json",
    atlas: "/stretchyman/stretchyman-pma.atlas",
    animations: ["sneak", "idle"],
    skins: ["default"]
  },
  {
    name: "Owl (Interactive)",
    skeleton: "/owl/owl-pro.skel",
    atlas: "/owl/owl-pma.atlas",
    animations: ["idle", "blink"],
    skins: ["default"]
  }
];

export default function Index() {
  const [currentModel, setCurrentModel] = useState(MODELS[0]);
  const [currentAnimation, setCurrentAnimation] = useState(MODELS[0].animations[0]);
  const [currentSkin, setCurrentSkin] = useState(MODELS[0].skins[0]);
  const [debug, setDebug] = useState(false);
  const [fit, setFit] = useState<'contain' | 'cover' | 'none'>('contain');

  const handleModelChange = (model: typeof MODELS[0]) => {
    setCurrentModel(model);
    setCurrentAnimation(model.animations[0]);
    setCurrentSkin(model.skins[0]);
  };

  const isOwl = currentModel.name === "Owl (Interactive)";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2d2d2d',
        paddingTop: 50,
      }}
    >
      <View style={{ flex: 1, margin: 20, backgroundColor: 'white', borderRadius: 10, overflow: 'hidden' }}>
        {isOwl ? (
          <OwlExample dom={{ style: { width: '100%', height: '100%' } }} />
        ) : (
          <SpineView
            key={`${currentModel.name}-${currentSkin}`} // Force remount on model/skin change
            skeleton={currentModel.skeleton}
            atlas={currentModel.atlas}
            animation={currentAnimation}
            skin={currentSkin}
            fit={fit}
            debug={debug}
            dom={{ style: { width: '100%', height: '100%' } }}
          />
        )}
      </View>

      <View style={{ height: '40%', paddingHorizontal: 20, paddingBottom: 30 }}>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          {currentModel.name}
        </Text>

        <ScrollView contentContainerStyle={{ gap: 15 }}>
          {/* Models */}
          <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
            {MODELS.map((model) => (
              <TouchableOpacity
                key={model.name}
                onPress={() => handleModelChange(model)}
                style={{
                  padding: 8,
                  backgroundColor: currentModel.name === model.name ? '#61dafb' : '#444',
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: currentModel.name === model.name ? 'black' : 'white' }}>
                  {model.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Animations */}
          <View>
            <Text style={{ color: '#aaa', marginBottom: 5 }}>Animation</Text>
            <ScrollView horizontal contentContainerStyle={{ gap: 8 }}>
              {currentModel.animations.map((anim) => (
                <TouchableOpacity
                  key={anim}
                  onPress={() => setCurrentAnimation(anim)}
                  style={{
                    padding: 6,
                    backgroundColor: currentAnimation === anim ? '#a6e22e' : '#444',
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ color: currentAnimation === anim ? 'black' : 'white', fontSize: 12 }}>
                    {anim}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Skins */}
          {currentModel.skins.length > 1 && (
            <View>
              <Text style={{ color: '#aaa', marginBottom: 5 }}>Skin</Text>
              <ScrollView horizontal contentContainerStyle={{ gap: 8 }}>
                {currentModel.skins.map((skin) => (
                  <TouchableOpacity
                    key={skin}
                    onPress={() => setCurrentSkin(skin)}
                    style={{
                      padding: 6,
                      backgroundColor: currentSkin === skin ? '#fd971f' : '#444',
                      borderRadius: 4,
                    }}
                  >
                    <Text style={{ color: currentSkin === skin ? 'black' : 'white', fontSize: 12 }}>
                      {skin}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Settings */}
          <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ color: 'white' }}>Debug</Text>
              <Switch value={debug} onValueChange={setDebug} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ color: 'white' }}>Fit: </Text>
              {(['contain', 'cover', 'none'] as const).map(f => (
                <TouchableOpacity
                  key={f}
                  onPress={() => setFit(f)}
                  style={{ padding: 5, backgroundColor: fit === f ? '#fff' : '#444', borderRadius: 4 }}
                >
                  <Text style={{ color: fit === f ? 'black' : 'white', fontSize: 10 }}>{f}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
