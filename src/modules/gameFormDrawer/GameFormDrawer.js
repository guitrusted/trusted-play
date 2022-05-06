import React from "react";
import { Button } from "./components/button";
import { Drawer } from "./components/drawer";
import { Input } from "./components/input";
import { Field } from "./components/field";
import { postGame, updateGame } from "../../services/firebaseHandler";

export function GameFormDrawer({ isVisible }) {
  const [formModel, setFormModel] = useState({});
  const isEditing = !!formModel.id;

  function isFormValid() {
    return (
      formModel.name &&
      formModel.shortDescription &&
      formModel.imageUrl &&
      formModel.gameUrl &&
      formModel.meetUrl
    );
  }

  function closeDrawer() {
    setFormModel({
      name: "",
      shortDescription: "",
      imageUrl: "",
      gameUrl: "",
      meetUrl: "",
    });
    setShouldShowAddGameForm(false);
  }

  function setField(field, e) {
    const newModel = {
      ...formModel,
      [field]: e.target.value,
    };
    setFormModel(newModel);
  }

  function justSaveIt() {
    const successCallback = () => {
      fetchGames();
      closeDrawer();
    };

    if (isEditing) {
      updateGame(formModel, successCallback);
    } else {
      postGame(formModel, successCallback);
    }
  }

  return (
    <Drawer
      isVisible={isVisible}
      title={isEditing ? "Edit game" : "Add a new game"}
      footer={
        <Button type="primary" disabled={!isFormValid()} onClick={justSaveIt}>
          Just save it
        </Button>
      }
      onClose={closeDrawer}
    >
      <form>
        <Field label="Name" required>
          <Input value={formModel.name} onChange={(e) => setField("name", e)} />
        </Field>
        <Field label="Description" required>
          <Input
            value={formModel.shortDescription}
            onChange={(e) => setField("shortDescription", e)}
          />
        </Field>
        <Field label="Image URL" required>
          <Input
            value={formModel.imageUrl}
            onChange={(e) => setField("imageUrl", e)}
          />
        </Field>
        <Field label="Game URL" required>
          <Input
            value={formModel.gameUrl}
            onChange={(e) => setField("gameUrl", e)}
          />
        </Field>
        <Field label="Meet URL" required>
          <Input
            value={formModel.meetUrl}
            onChange={(e) => setField("meetUrl", e)}
          />
        </Field>
      </form>
    </Drawer>
  );
}
