! function() {
	var t;
	t = function(t) {

		var e = void 0 === t ? {} : t;
		e = Object.assign({}, {
			interval: 5e3,
			selector: "#ticker",
			showSpread: !0,
			tableStyle: "\n            font-size:12px;\n            font-family: Tahoma, Arial, Helvetica, sans-serif;\n        ",
			theadStyle: "\n            font-weight: bold;\n            text-align: center;\n        ",
			tbodyStyle: "\n            text-align: center;\n        ",
			tbodyRowStyle: "\n\n        ",
			tbodyCellStyle: "\n            padding: 3px 4px;\n        ",
			symbol: "Symbol",
			bid: "Bid",
			ask: "Ask",
			spread: "Spread",
			upIconBase64: "data:image/gif;base64,R0lGODlhDAAMAJECAMbDxkLJAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFNEM5RkNFNDFBOTExRTJBQTNERDE3MEM1MDAwNTk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFNEM5RkNGNDFBOTExRTJBQTNERDE3MEM1MDAwNTk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REU0QzlGQ0M0MUE5MTFFMkFBM0REMTcwQzUwMDA1OTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REU0QzlGQ0Q0MUE5MTFFMkFBM0REMTcwQzUwMDA1OTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAACACwAAAAADAAMAAACGpSPaaEY38Sbalpnr8wZTwACRyYmZBOCUVMAADs=",
			downIconBase64: "data:image/jpeg;base64,R0lGODlhDAAMAJEDAMggJ8bDxcghJ////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFNEM5RkQyNDFBOTExRTJBQTNERDE3MEM1MDAwNTk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFNEM5RkQzNDFBOTExRTJBQTNERDE3MEM1MDAwNTk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REU0QzlGRDA0MUE5MTFFMkFBM0REMTcwQzUwMDA1OTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REU0QzlGRDE0MUE5MTFFMkFBM0REMTcwQzUwMDA1OTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAADACwAAAAADAAMAAACHpyPqQoCvVwDgU16nNhzC8NpXgWKD5lxmDIuxuouBQA7"
		}, e);
		var c, n, l, a = document.querySelector(e.selector);
		a ? (n = document.createElement("table"), l = document.createElement("thead"), c = document.createElement("tbody"), n.border = 0, n.style = e.tableStyle, n.className = "contentTable", l.style = e.theadStyle, c.style = e.tbodyStyle, l.innerHTML = '<tr>\n            <td align="center"></td>\n            <td align="center">'.concat(e.symbol, '</td>\n            <td align="center">').concat(e.bid, '</td>\n            <td align="center">').concat(e.ask, "</td>\n            ").concat(e.showSpread ? '<td align="center">'.concat(e.spread, "</td>") : "", "\n        </tr>"), document.head.appendChild(n), n.appendChild(l), n.appendChild(c), a.appendChild(n), i(), setInterval(i, e.interval)) : console.error("Target DOM node does not exist", e.selector);

		function i() {
			fetch(e.url).then((function(t) {
				return t.json()
			})).then((function(t) {
				if ("success" !== t.status) throw new Error(t);
				! function(t) {
					var n = "",
						l = !0,
						a = !1,
						i = void 0;
					try {
						for (var o, d = t[Symbol.iterator](); !(l = (o = d.next()).done); l = !0) {
							var b = o.value,
								A = "up" === b.direction ? e.upIconBase64 : "down" === b.direction ? e.downIconBase64 : "";
							n += '\n                <tr style="'.concat(e.tbodyRowStyle, '" data-direction="').concat(b.direction, '">\n                    <td style="').concat(e.tbodyCellStyle, '">').concat(A ? '<img src="'.concat(A, '" alt="').concat(b.direction, '" />') : "", '</td>\n                    <td style="').concat(e.tbodyCellStyle, '">').concat(b.symbol, '</td>\n                    <td style="').concat(e.tbodyCellStyle, '">').concat(b.bid, '</td>\n                    <td style="').concat(e.tbodyCellStyle, '">').concat(b.ask, "</td>\n                    ").concat(e.showSpread ? '<td style="'.concat(e.tbodyCellStyle, '">').concat(b.spread, "</td>") : "", "\n                </tr>\n            ")
						}
					} catch (t) {
						a = !0, i = t
					} finally {
						try {
							l || null == d.return || d.return()
						} finally {
							if (a) throw i
						}
					}
					c.innerHTML = n
				}(t.data)
			})).catch((function(t) {
				console.error("Error retrieving ticker", t)
			}))
		}
	}, window.mt5VerticalTicker = t
}();
