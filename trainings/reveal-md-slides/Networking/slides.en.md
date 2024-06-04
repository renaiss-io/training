---
title: Making Slides
revealOptions:
  progress: true
  # other configs for reveal: https://revealjs.com/config/

# custom config for our build script
description: Learning how to do slides in this repo
category: General
level: 1 # 1: beginner, 2: mid, 3: advance
---

# Haciendo Slides

Note:
Estas son _notas_ para el disertante. Se pueden usar apretando la letra S

---

## Reveal.js

[Reveal.js](https://revealjs.com) es una lib para crear slides con HTML

Aca usamos [reveal-md](https://github.com/webpro/reveal-md) que simplifica haciendolas en Markdown puro

---

## Recursos Markdown - link

Links como [este](https://www.renaiss.io) se pueden hacer así

```md
[este](https://www.renaiss.io)
```

---

## Recursos Markdown - Code

Código fuente se puede escribir de la siguiente forma:

```js
const hello = "world";
console.log(hello);
```

````md
```js
const hello = "world";
console.log(hello);
```
````

---

## Recursos Markdown - Imágenes

Imágenes pueden ser agregadas

![](images/logo.png)

```md
![](images/logo.png)
```

---

## Recursos Markdown - Tablas

Tablas se pueden hacer de la siguiente forma:
| Tables | Are | Cool |
| ------------- |:-------------:| -----:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

---

## Recursos Markdown - Listas

Listas se pueden hacer de la siguiente forma:

- item 1
- item 2
- item 3

```md
- item 1
- item 2
- item 3
```

---

## Recursos Markdown - Listas con numeraciones

Listas se pueden hacer de la siguiente forma:

1. item 1
2. item 2
3. item 3

```md
1. item 1
2. item 2
3. item 3
```

---

## Recursos Markdown - Citas

Citas se pueden hacer de la siguiente forma:

> Cita

```md
> Cita
```

---

## Recursos Markdown - Titulo

Titulo se puede hacer de la siguiente forma:

# Título 1

## Título 2

```md
# Título 1

## Título 2
```

---

## Recursos Markdown - Texto en negrita

Texto en **negrita** se puede hacer de la siguiente forma:
**texto en negrita**

```md
**texto en negrita**
```

---

## Recursos Markdown - Texto en cursiva

Texto en _cursiva_ se puede hacer de la siguiente forma:
_texto en cursiva_

```md
_texto en cursiva_
```

---

## Recursos No Markdown - HTML

HTML se puede usar para agregar cosas que no están en markdown, como, videos, etc.

<iframe width="300" height="157" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

---

## Recursos Reveal.js - Fragmentos

Fragmentos son pequeños bloques de contenido que pueden ir apareciendo en pantalla.

- fragmento 1 <!-- .element: class="fragment" data-fragment-index="1" -->
- fragmento 2 <!-- .element: class="fragment" data-fragment-index="3" -->
- fragmento 3 <!-- .element: class="fragment" data-fragment-index="2" -->

```md
- fragmento 1 <!-- .element: class="fragment" data-fragment-index="1" -->
- fragmento 2 <!-- .element: class="fragment" data-fragment-index="3" -->
- fragmento 3 <!-- .element: class="fragment" data-fragment-index="2" -->
```

<!-- .element: class="fragment" data-fragment-index="4" -->

---

## Recursos Reveal.js - Notas

Notas para el disertante se pueden agregar de la siguiente forma:

```md
... all my slide and at the end:

Notes :
Estas son notas para el disertante.
Se pueden usar apretando la letra S
```

Notes:
Estas son _notas_ para el disertante.
Se pueden usar apretando la letra S

---

Happy Coding!
