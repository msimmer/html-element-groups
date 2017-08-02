const should      = require('chai').should()
const elements    = require('./index')
const sectioning  = require('./elements/sectioning')
const text        = require('./elements/text')
const inline      = require('./elements/inline')
const demarcating = require('./elements/demarcating')
const tabular     = require('./elements/tabular')
const form        = require('./elements/form')
const interactive = require('./elements/interactive')
const deprecated  = require('./elements/deprecated')

describe('groups', () => {
    describe('#sectioning', () => {
        it('should match the export from [./elements/sectioning]', () =>
            elements.sectioning.should.equal(sectioning)
        )
    })
    describe('#text', () => {
        it('should match the export from [./elements/text]', () =>
            elements.text.should.equal(text)
        )
    })
    describe('#inline', () => {
        it('should match the export from [./elements/inline]', () =>
            elements.inline.should.equal(inline)
        )
    })
    describe('#demarcating', () => {
        it('should match the export from [./elements/demarcating]', () =>
            elements.demarcating.should.equal(demarcating)
        )
    })
    describe('#tabular', () => {
        it('should match the export from [./elements/tabular]', () =>
            elements.tabular.should.equal(tabular)
        )
    })
    describe('#form', () => {
        it('should match the export from [./elements/form]', () =>
            elements.form.should.equal(form)
        )
    })
    describe('#interactive', () => {
        it('should match the export from [./elements/interactive]', () =>
            elements.interactive.should.equal(interactive)
        )
    })
    describe('#deprecated', () => {
        it('should match the export from [./elements/deprecated]', () =>
            elements.deprecated.should.equal(deprecated)
        )
    })
})

describe('lists', () => {
    describe('#names', () => {
        it('should be an array that includes all element names, except for those in [deprecated]', () => {
            elements.names.should.be.an('array')
            elements.names.should.include.all.members([...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive])
            elements.names.should.not.include.members([...deprecated])
        })
    })
    describe('#namesIncludingDeprecated', () => {
        it('should be an array that includes all element names, including those in [deprecated]', () => {
            elements.namesIncludingDeprecated.should.be.an('array')
            elements.namesIncludingDeprecated.should.include.all.members([...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive, ...deprecated])
        })
    })
})

describe('methods', () => {
    describe('#include()', () => {
        it('should include the properties provided in an array of parameters', () => {
            elements.include(['sectioning', 'text']).should.include.members([...sectioning, ...text])
            elements.include(['sectioning', 'text']).should.not.include.members([...inline])
        })
    })
    describe('#exclude()', () => {
        it('should exclude the properties provided in an array of parameters', () => {
            elements.exclude(['sectioning', 'text']).should.not.include.members([...sectioning, ...text])
            elements.exclude(['sectioning', 'text']).should.include.members([...inline])
        })
    })
})

describe('versioning', () => {
    describe('#timestamp', () => {
        it('should be a valid date in UNIX time', () => {
            String(new Date(elements.timestamp)).should.match(/[A-Z][a-z]{2} \d{2} \d{4} \d{2}:\d{2}:\d{2} [A-Z]{3}/)
        })
    })
})
