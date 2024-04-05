  <template>
      <v-row justify="center">
        <v-dialog
          v-model="taskStore.showDialogTaskFields"
          persistent
          min-width="400"
          max-width="600"
        >
          <!-- <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              Open Dialog
            </v-btn>
          </template> -->
          <v-card>
            <v-card-title class="text-h5">
              Edit Task {{ taskStore.tasks[taskStore.indexTaskSelected].title }}
            </v-card-title>
            <v-card-text>
              <v-text-field 
                v-model="taskStore.tasks[taskStore.indexTaskSelected].title"
                label="Title"  
            ></v-text-field>  
              <v-text-field
                v-model="taskStore.tasks[taskStore.indexTaskSelected].description" 
                label="Description"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary-darken-1"
                variant="elevated"
                @click="taskStore.updateTask(index)"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  </template>

  <script setup>
  
  import { useTaskStore } from '@/store/tasks';

  const taskStore = useTaskStore();

  let index = taskStore.indexTaskSelected


  </script>

  <style>

  </style>