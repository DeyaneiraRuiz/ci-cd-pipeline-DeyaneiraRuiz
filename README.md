¡Claro! El problema ocurre porque estás abriendo bloques de código Bash con \`\`\`bash pero no los cierras correctamente, y por eso todo lo demás aparece como si fuera código Bash.

A continuación te corrijo todo el `README.md`, **cerrando correctamente los bloques de código** y asegurando que **solo los comandos estén dentro de ellos**.

---

### ✅ README CORREGIDO PARA GitHub

```markdown
# CI/CD Pipeline - Deyaneira Ruiz

Este proyecto es una calculadora web simple desarrollada con Node.js y Express que implementa un pipeline de CI/CD con GitHub Actions. Incluye operaciones básicas y pruebas automatizadas.

## 🚀 Funcionalidad

La aplicación ofrece los siguientes endpoints:

- `/suma?a=5&b=3`
- `/resta?a=10&b=5`
- `/multiplica?a=4&b=2`
- `/divide?a=10&b=5`

### ⚠️ Manejo de Errores

Si intentas dividir entre 0, el servidor retorna error 400 con mensaje descriptivo.

## 📁 Estructura del Proyecto

```

src/                → Código fuente
tests/              → Pruebas unitarias e integración
.github/workflows/  → Archivos de GitHub Actions
docs/               → Documentación futura

````

## ✅ Testing

El proyecto usa `Jest` y `Supertest`.

### Ejecutar tests localmente:

```bash
npm install
npm test
````

## 👨‍💻 Cómo usar

Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/ci-cd-pipeline-tu-nombre.git
cd ci-cd-pipeline-DeyaneiraRuiz
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicación:

```bash
npm start
```

Abre en el navegador:

```
http://localhost:3000/suma?a=10&b=5
```
