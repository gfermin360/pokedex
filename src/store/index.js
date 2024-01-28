import { configureStore } from "@reduxjs/toolkit";
import trainer from './states/trainer.state'
import loading from './states/loading.state'


export default configureStore({
  reducer: {
    trainer,
    loading
  }

})

 