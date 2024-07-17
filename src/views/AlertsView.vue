<template>
  <main class="w-full h-dvh overflow-y-auto p-5 grid gap-5">
    <h1 class="font-semibold mb-5">Alerts</h1>
    <Message severity="error" icon="pi pi-exclamation-circle" closable>
      <div>
        <p>Battery temperature critical. Please turn off battery immediatley!</p>
        <small>17-Jul-24</small>
      </div>
    </Message>


    <Message severity="error" icon="pi pi-exclamation-circle" closable>
      <div>
        <p>Battery temperature critical. Please turn off battery immediatley!</p>
        <small>17-Jul-24</small>
      </div>
    </Message>

    <Message severity="error" icon="pi pi-exclamation-circle" closable>
      <div>
        <p>Battery temperature critical. Please turn off battery immediatley!</p>
        <small>17-Jul-24</small>
      </div>
    </Message>

    <div class="grid gap-5">
      <Message severity="warn" icon="pi pi-exclamation-triangle" closable>
        Too many devices connected. Power consumption too high.
      </Message>

      <Message severity="warn" icon="pi pi-exclamation-triangle" closable>
        <div>
          <p>Too many devices connected. Power consumption too high.</p>
          <small>17-Jul-24</small>
        </div>
      </Message>

      <Message severity="info" icon="pi pi-info-circle" closable>
        <div>
          <p>Battery discharged.</p>
          <small>17-Jul-24</small>
        </div>
      </Message>

      <Message severity="success" icon="pi pi-check" closable>
        <div>
          <p>Battery charging.</p>
          <small>17-Jul-24</small>
        </div>
      </Message>

      <Message severity="success" icon="pi pi-check" closable>
        <div>
          <p>Updates successfully isntalled. You are now running the latest version of the software.</p>
          <small>17-Jul-24</small>
        </div>
      </Message>

      <Message severity="warn" icon="pi pi-exclamation-triangle" closable>
        <div>
          <p>Pending updates! Upgrade now to improve battery performance.</p>
          <small>17-Jul-24</small>
        </div>
      </Message>
    </div>
  </main>
</template>