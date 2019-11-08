;(function(window) {
	function Roll(options) {
		var config = {
			index: 0,
			count: 0,
			timer: null,
			prize: null
		}
		this.options = Object.assign(config, options);
	}

	Roll.prototype = {
		start: function() {
			var options = this.options,
					_this = this;

			options.count = 0;
			options.timer = setInterval(function() {
				_this.getElement('.' + options.class + options.index).classList.remove(options.active);
				options.index = ++options.index > 7 ? 0 : options.index;
				_this.getElement(".luck-unit-"+options.index).classList.add(options.active);
			}, 70)
		},
		stop: function(prize, callback) {
			if (!prize && typeof prize == 'undefined') throw new Error('parize不能为空');
			
			this.options.prize = prize;
			callback && (this.options.endBack = callback);
			this.options.timer && clearInterval(this.options.timer);
			this.asyncBack();
		},
		asyncBack: function() {
			var count = this.options.count,
					_this = this;

			setTimeout(function() {
				_this.step()
			}, 100 + 1.3*count*count)
		},
		getElement: function(query) {
			return document.querySelector(query);
		},
		step: function() {
			var options = this.options;

			options.count++;
			this.getElement('.' + options.class + options.index).classList.remove(options.active);
			if (++options.index > 7) options.index = 0
			this.getElement('.' + options.class + options.index).classList.add(options.active);
			if (options.count < 16 - options.prize) {
				this.asyncBack();
			} else {
				if (options.index !== options.prize) {
					this.asyncBack()
				} else {
					options.endBack && options.endBack();
				}
			}
		}
	}

	window.Roll = Roll;
}(window))