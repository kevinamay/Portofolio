import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Database URL provided by user
const firebaseConfig = {
  databaseURL: "https://pui1-b3d37-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
