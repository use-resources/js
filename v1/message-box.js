class MessageBox {
  constructor(parentElement) {
    const [element, elements] = this.__html();
    const datetime = Date.now();

    this.__script(element, elements);
    this._element = element;
    this._elements = elements;
    this._onsubmit = new Map();
    this._mode = 0;
    this._user = {
      id: datetime,
      fullname: `user-${datetime}`,
      avatar: "",
      sender: true,
    };

    element.prepend(this.__css());
    parentElement?.append(element);
  }

  __html() {
    const $element = (function (innerHTML) {
      const $element = document.createElement("div");
      $element.innerHTML = innerHTML;
      return $element.children[0];
    })(`
        <div class="DIV_MY515CJWOGHQEHE"><div class="div_07x1lu8m5i"><div id="itemTrueChat" class="div_kw92twoy1h"></div></div><form id="form" class="form_wxnpp7syfp" autocomplete="off"><input type="text" class="input_f8xce18l4b" name="body" placeholder="escribir..."><button class="button_zwzlct4abf"><svg viewBox="0 0 24 24"><path d="M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-1.41Z"></path></svg></button></form></div>
    `);

    const $elements = Array.from($element.querySelectorAll("[id]")).reduce(
      (prev, curr) => {
        prev[curr.getAttribute("id")] = curr;
        curr.removeAttribute("id");
        return prev;
      },
      {}
    );

    return [$element, $elements];
  }

  __script(_, $elements) {
    $elements.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        user: this._user,
        message: {
          body: $elements.form.body.value.trim(),
          datetime: Date.now(),
        },
      };

      $elements.form.body.value = "";
      $elements.form.body.focus();

      if (data.message.body) {
        this._onsubmit.forEach((callback) => callback(data));
        this.send(data).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  }

  __css() {
    const style = document.createElement("style");
    style.innerHTML =
      ".DIV_MY515CJWOGHQEHE { --var-item-scroll-color: #fff; --var-item-scroll-width: thin; --var-item-left-background: rgb(255 255 255 / 0.1); --var-item-left-color: #fff; --var-item-left-img: flex; --var-item-right-background: #fff; --var-item-right-color: #000; --var-item-right-img: flex; user-select: none; background: #000; width: 100%; height: 100%; display: flex; flex-direction: column; font-family: sans-serif; margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; } svg { height: 15px; width: 15px; } .div_07x1lu8m5i { flex: 1; display: flex; overflow-x: hidden; overflow-y: auto; scrollbar-width: var(--var-item-scroll-width); scrollbar-color: var(--var-item-scroll-color) transparent; } .div_kw92twoy1h { margin: auto; margin-top: initial; display: grid; width: 100%; padding: 5px; gap: 5px; } .div_z37eftaehr { width: 100%; display: flex; gap: 5px; &.sender { & .div_zbqwxvf0qq { background: var(--var-item-right-background); color: var(--var-item-right-color); } & .div_y9n2e28eob { display: var(--var-item-right-img); } } &.sender.mode-0 { justify-content: right; flex-direction: row-reverse; & .div_zbqwxvf0qq span { display: none; } } } .div_y9n2e28eob { display: var(--var-item-left-img); width: 40px; height: 40px; & img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; } } .div_zbqwxvf0qq { background: var(--var-item-left-background); color: var(--var-item-left-color); max-width: min(75%, 500px); padding: 10px; display: grid; border-radius: 15px; & span { font-size: 13px; font-weight: bold; } & p { word-break: break-word; font-size: 15px; } & small { margin-left: auto; font-size: 12px; } } .form_wxnpp7syfp { width: 100%; height: 60px; display: flex; } .input_f8xce18l4b { all: unset; flex: 1; padding-left: 10px; color: #fff; } .button_zwzlct4abf { all: unset; box-sizing: border-box; border-radius: 50%; width: 40px; height: 40px; margin: 10px; display: flex; justify-content: center; align-items: center; background: var(--var-item-right-background); cursor: pointer; svg { fill: #000; fill: var(--var-item-right-color); width: 20px; height: 20px; } } }";
    return style;
  }

  style(data = null, mode = 0) {
    if (data != null) {
      this._element.style.background = data?.background ?? "";
      this._element.style.setProperty(
        "--var-item-left-background",
        data?.varItemLeftBackground ?? "rgb(255 255 255 / 0.1)"
      );
      this._element.style.setProperty(
        "--var-item-left-color",
        data?.varItemLeftColor ?? "#fff"
      );

      this._element.style.setProperty(
        "--var-item-left-img",
        data?.varItemLeftImg ?? "flex"
      );

      this._element.style.setProperty(
        "--var-item-right-background",
        data?.varItemRightBackground ?? "#fff"
      );

      this._element.style.setProperty(
        "--var-item-right-color",
        data?.varItemRightColor ?? "#000"
      );

      this._element.style.setProperty(
        "--var-item-right-img",
        data?.varItemRightImg ?? "flex"
      );

      this._element.style.setProperty(
        "--var-item-scroll-width",
        data?.varItemScrollWidth ?? "thin"
      );

      this._element.style.setProperty(
        "--var-item-scroll-color",
        data?.varItemScrollColor ?? "#fff"
      );
    }

    this._mode = mode == 0 ? 0 : 1;
  }

  user(user) {
    this._user = user;
  }

  send(data) {
    const mode = `mode-${this._mode}`;
    const sender = data.user.sender ? "sender" : "";

    const $element = (function (innerHTML) {
      const $element = document.createElement("div");
      $element.innerHTML = innerHTML;
      return $element.children[0];
    })(`
        <div class="div_z37eftaehr ${sender} ${mode}"><div class="div_y9n2e28eob"><img src="" data-render="avatar"></div><div class="div_zbqwxvf0qq"><span data-render="fullname"></span><p data-render="body"></p><small data-render="datetime"></small></div></div>
    `);

    const $elements = Array.from(
      $element.querySelectorAll("[data-render]")
    ).reduce((prev, curr) => {
      prev[curr.getAttribute("data-render")] = curr;
      curr.removeAttribute("data-render");
      return prev;
    }, {});

    const lastElement = this._elements.itemTrueChat.lastElementChild;

    if (lastElement) {
      const dataLastElement = JSON.parse(lastElement.getAttribute("data-data"));
      if (dataLastElement.user.id == data.user.id) {
        $elements.avatar.style.visibility = "hidden";
        $elements.fullname.style.display = "none";
      }
    }

    $elements.avatar.src = data.user.avatar;
    $elements.fullname.textContent = data.user.fullname;
    $elements.body.textContent = data.message.body;
    $elements.datetime.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(data.message.datetime));

    this._elements.itemTrueChat.append($element);
    $element.setAttribute("data-data", JSON.stringify(data));
    return $element;
  }

  onsubmit(callback) {
    const symbol = Symbol();

    const offsubmit = () => {
      return this._onsubmit.delete(symbol);
    };

    this._onsubmit.set(symbol, (data) => {
      callback(data, offsubmit);
    });

    return () => offsubmit();
  }

  element() {
    return this._element;
  }
}
