migrate((app) => {
  try {
    const email = "diliberto.negrete@kiritsutechnologies.com";
    const password = "Djnm9642/*/";

    if (!email || !password) {
      throw new Error("email: cannot be blank; password: cannot be blank.");
    }

    const superuser = new Record(app.findCollectionByNameOrId("_superusers"));
    superuser.set("email", email);
    superuser.set("password", password);

    app.save(superuser);
  } catch (error) {
    console.error("Error creating superuser:", error);
    throw error;
  }
}, (app) => {
  // Opcional: código para revertir la migración si fuera necesario
});
